import processing.serial.*;
import gausstoys.core.*;

GaussSense gs;

boolean showRawData = true;

// var for pictures
  PImage bg1, bg2, treasure, hp, fighter, enemy, end1, end2, start1, start2,
      bomb;

  // var for crush animation flames
  int numFrames = 5;
  PImage[] flame = new PImage[numFrames];// boom flames array

  // var for bg initial location
  int bg1x = 640, bg2x = 0;

  // different
  boolean isPlaying = false;
  boolean tmp2 = false;
  boolean changeTmp = false;

  // press initial
  boolean upPressed = false, downPressed = false, leftPressed = false,
      rightPressed = false;

  // mode switch
  boolean changeTreasurePlace = false, changeEnemyPlace0 = false,
      changeEnemyPlace1 = false, changeEnemyPlace2 = false,
      changeEnemyPlace3 = false, changeStart = false;

  int countFrame = 0;

  int initialBlood = 38;
  float[][] locationX = new float[4][10], locationY = new float[4][10];
  final int COUNT = 3;
  float spacingX = width / COUNT + 20, spacingY = height / COUNT + 10;
  float fx = 500, fy = 240;
  int ex1 = -2000, ey1 = floor(random(450));// enemy location initial
  int x = 0;
  int ey, ex = 0;
  float speed = 5;
  int t = floor(random(600)), s = floor(random(480));// treasure place
  int currentFrame;
  int framecount = 0;

  // var for flame animate
  float crushX = 10000;
  float crushY = 10000;
  int flame_time = 0;
  int sec = 0;

  // var for bullet
  boolean bulletPressed = false;
  PImage bullet;
  int[] bulletPositionX = new int[5];
  int[] bulletPositionY = new int[5];
  boolean[] bullet_appear = new boolean[5];
  boolean[] bullet_crush = new boolean[5];
  float bulletSpeed = 3;
  int countBulletFrame = 0;
  int ID_bullet = 0;
  int num_bullet = 5;

  // var score
  int score = 0;
  
  //Gausstoys variables
  int turnOver = 0;

  void setup() {
    size(641, 482);
    bg1 = loadImage("img/bg1.png");
    bg2 = loadImage("img/bg2.png");
    end1 = loadImage("img/end1.png");
    end2 = loadImage("img/end2.png");
    enemy = loadImage("img/enemy.png");
    fighter = loadImage("img/fighter.png");
    currentFrame = 0;

    for (int i = 0; i < numFrames; i++) {
      flame[i] = loadImage("img/flame" + (i + 1) + ".png");
    }

    for (int i = 0; i < bullet_crush.length; i++) {
      bullet_crush[i] = false;
    }
    for (int i = 0; i < bullet_appear.length; i++) {
      bullet_appear[i] = false;
    }

    hp = loadImage("img/hp.png");
    bullet = loadImage("img/shoot.png");
    start1 = loadImage("img/start1.png");
    start2 = loadImage("img/start2.png");
    treasure = loadImage("img/treasure.png");

    frameRate(80);
    
    //Gausstoys setups
    // List all serial ports
    GaussSense.printSerialPortList();
    
    //Initialize the GaussSense
    gs = new GaussSense(this, GaussSense.GSType.GAUSSSENSE_MINI, 1, 1, Serial.list()[Serial.list().length - 1], 115200);
  }

  void mousePressed() {
    if (!changeTmp) {
      if (mouseX > 200 && mouseX <= 430) {
        if (mouseY > 380 && mouseY < 420) {
          changeTmp = true;
          tmp2 = !tmp2;
        }
      }
    } else if (changeTmp) {
      if (mouseX > 200 && mouseX <= 430) {
        if (mouseY > 300 && mouseY < 340) {
          tmp2 = !tmp2;
          changeTmp = false;
        }
      }
    }
  }

  void draw() {
      background(bg1);// bg
      image(start1, 0, 0); // start initial
      countFrame++;// framecount
      
      //Gauss Sensing
      // Draw upsampled sensor data  
      int upsampleFactor = 5;
      gs.setUpsampledData2D(this.width, this.height, upsampleFactor);
      //Set but don't Draw the upsampled data
      
      float thld = 15; //Unit: Gauss
      
      //Get bipolar midpoint data
      GData gPoint = gs.getBipolarMidpoint(thld);
      printPointData(gPoint);
      
      if (tmp2) {// count press time and initial start2
        if (countFrame % 30 == 0 && changeStart == false) { // start game
          // with norepeat
          isPlaying = true;
        } else if (!changeStart) {
          image(start2, 0, 0);
        } else if (changeStart) {
          image(end1, 0, 0);
        }
      } else if (changeStart) {
        if (countFrame % 30 == 0) {
          isPlaying = true;
        } else {
          image(end2, 0, 0);
          initialBlood = 38;
          tmp2 = false;
          changeStart = false;
        }
      }
      if (isPlaying) {// game start
        background(0);// bg0
        image(bg1, bg1x - 640, 0);// initial bg1
        image(bg2, bg2x - 640, 0);// initial bg2
        scoreChange(score);
        bg1x += 2;// bg1 Xspeed
        bg2x += 2;// bg2 Xspeed
        bg1x %= 1280;// if bg1 to 1280,it will go back 0;
        bg2x %= 1280;// like bg2;
        ex1 += 4;// enemy speed
        
        //treasure speed
        t += 4;
        //treasure movement
        if(t > 640){
          t = -2300;
        }
        if (ex1 > 640) {// enemy location
          ex1 = -2300;
          ey1 = floor(random(450));
        }
        if (ex1 > 640) {
          ex1 = -2300;
          ey1 = floor(random(450));
        }
        
        //Gauss Pitch move up and down
        turnOver = (int) gPoint.getPitch();
        print (turnOver);
        if (turnOver >= 5 ){
          upPressed = true;
        }else if(turnOver <= -5){
          downPressed = true;
        }else{
          upPressed = false;
          downPressed = false;
        }
        
        
        //auto shoot bullet
        int intensity = (int) gPoint.getIntensity(); //Get the intensity. Unit: gauss
        
        if (countFrame%15 == 0 && countBulletFrame > 15 && num_bullet <= 5) {
          bulletPressed = true;
          bulletPositionX[ID_bullet] = (int) fx;
          bulletPositionY[ID_bullet] = (int) fy;
          bullet_appear[ID_bullet] = true;
          countBulletFrame = 0;
          ID_bullet++;
          num_bullet++;
          if (ID_bullet >= bulletPositionX.length) {
            ID_bullet = 0;
          }
        }

        float x = 0, y1 = 0, y2 = height + spacingY;
        int enemynum = -1;
        int enemygroup = -1;
        for (int i = 0; i < 4; i++) {
          for (int j = 0; j < 10; j++) {
            if(isHit(fx,fy,50,50,int(locationX[i][j]),int(locationY[i][j]),50,50)){

                updateEnemy(i);
                enemynum = j;
                enemygroup = i;
                initialBlood -= 19;
             }
          }
        }
        int senemynum = -1;
        int senemygroup = -1;
        
        // bullet hit
        for (int i = 0; i < 4; i++) {
          for (int j = 0; j < 10; j++) {
            for (int k = 0; k < 5; k++) {
              if (bullet_appear[k]) {
                if (!bullet_crush[k]) {
                 if (isHit(locationX[i][j],locationY[i][j],45,43,(int) bulletPositionX[k],(int) bulletPositionY[k],0,0)) {
                      crushX = locationX[i][j] + 30;
                      crushY = locationY[i][j] + 30;
                      senemynum = j;
                      senemygroup = i;
                      score+=20;                    
                      updateEnemy(i);
                      bullet_appear[k] = false;
                      bullet_crush[k] = true;
                      flame_time = 0;
                  }
                }
              }
            }
          }
        }
        // bullet
        if (bulletPressed) {

          for (int i = 0; i < bulletPositionX.length; i++) {
            bulletPositionX[i] -= 3;
            if (!bullet_crush[i]) {
              image(bullet, bulletPositionX[i], bulletPositionY[i]);
            }
            if (bullet_crush[i]) {
              image(bullet, bulletPositionX[i], 100000);
            }

            if (bulletPositionX[i] < 0) {
              num_bullet--;
              bulletPositionX[i] = 10000;

            }
            if (bulletPositionX[i] < 0 || bullet_crush[i]) {
              bulletPositionY[i] = 10000;
              bullet_crush[i] = false;
              bullet_appear[i] = false;
            }
          }
        }
        countBulletFrame++;
        
        //first & second group enemy settings
        for (int i = 0; i < 5; i++) {
          locationX[0][i] = 1760 + ex1 + 80 * i;// first group x location
          locationX[1][i] = 900 + ex1 + 50 * i; // second group x location
          
          //enemy hit settings
          if (changeEnemyPlace0) {
            if ((enemynum == i && enemygroup == 0) || (senemynum == i && senemygroup == 0)) {
              crushX = locationX[0][i];
              crushY = ey1;
              locationY[0][i] = -500;
            }
          } else {
            locationY[0][i] = ey1;
          }

          if (locationX[0][i] > 950) {
            changeEnemyPlace0 = false;
            locationY[0][i] = ey1;
          }

          if (changeEnemyPlace1) {
            if ((enemynum == i && enemygroup == 1)
                || (senemynum == i && senemygroup == 1)) {
              locationY[1][i] = -500;
              crushX = locationX[1][i];
              crushY = 50 + 40 * i;
              crtlboom(locationX[1][i], 50 + 40 * i);
            }
          } else {
            locationY[1][i] = 50 + 40 * i;
          }

          if (locationX[1][i] > 950) {
            changeEnemyPlace1 = false;
            locationY[1][i] = 50 + 40 * i;
          }

          image(enemy, locationX[0][i], locationY[0][i]);
          image(enemy, locationX[1][i], locationY[1][i]);

        }
        for (int i = 0; i < COUNT; i++) {
        x = i * spacingX;
        locationX[2][i] = 100 + ex1 + x;
        if (changeEnemyPlace2) {
         if ((enemynum == i && enemygroup == 2)
             || (senemynum == i && senemygroup == 2)) {
           crushX = locationX[2][i];
           crushY = y1 + 150;
           locationY[2][i] = -500;

         }
        } else {
         locationY[2][i] = y1 + 150;
        }
        if (locationX[2][i] > 830) {
         changeEnemyPlace2 = false;
         locationY[2][i] = y1 + 150;
        }
        image(enemy, locationX[2][i], locationY[2][i]);
        y1 += spacingY;

        }
        for (int i = 0; i < COUNT; i++) {
        x = i * spacingX;

        if (changeEnemyPlace3) {
         if ((enemynum == i && enemygroup == 3)
             || (senemynum == i && senemygroup == 3)) {
           locationY[3][i] = -500;
           crushX = locationX[2][i];
           crushY = y1 + 115;
         }
        } else {
         locationY[3][i] = y1 + 115;
        }
        if (locationX[3][i] > 740) {
         changeEnemyPlace3 = false;
         locationY[3][i] = y1 + 115;
        }
        locationX[3][i] = ex1 + x;

        image(enemy, locationX[3][i], locationY[3][i]);
        y1 += spacingY;
        }
        
        locationX[2][6] = ex1 + 40;
        locationX[2][7] = ex1 + 163;
        if (changeEnemyPlace2) {
        if ((enemynum == 6 && enemygroup == 2)
           || (senemynum == 6 && senemygroup == 2)) {
         locationY[2][6] = -500;
         crushX = locationX[2][6];
         crushY = 193;
        }
        } else {
        locationY[2][6] = 193;
        }
        if (locationX[2][6] > 830) {
        changeEnemyPlace2 = false;
        locationY[2][6] = 193;
        }

        if (changeEnemyPlace2) {
        if ((enemynum == 7 && enemygroup == 2)
           || (senemynum == 7 && senemygroup == 2)) {
         locationY[2][7] = -500;
         crushX = locationX[2][7];
         crushY = 297;
        }
        } else {
        locationY[2][7] = 297;
        }
        if (locationX[2][7] > 830) {
        changeEnemyPlace2 = false;
        locationY[2][7] = 297;
        }

        image(enemy, locationX[2][6], locationY[2][6]);
        image(enemy, locationX[2][7], locationY[2][7]);
        
        image(fighter, fx, fy);// fighter location
        
        stroke(250, 3, 3);// blood
        strokeWeight(18);
        line(58, 38, 58 + initialBlood, 38);// blood line
        image(hp, 50, 25);// initial hp
        image(treasure, t, s);// initial treasure
        pressSetting();
        border();

        // boom animation
        image(flame[flame_time], crushX, crushY, 60, 60);
        sec++;
        if (sec > 12) {
          flame_time++;
          sec = 0;
        }
        if (flame_time >= flame.length) {
          crushX = 10000;
          crushY = 10000;
          flame_time = 0;
        }

        if (t - 50 < fx && fx <= t + 45) {
          if (s - 50 < fy && fy <= s + 50) {
            updateTreasure();
            if (changeTreasurePlace) {
              s = floor(random(430));
              t = floor(random(600));
              changeTreasurePlace = false;
            }
            initialBlood += 19;
          }
        }

        if (initialBlood <= 0) {
          initialBlood = 0;
          isPlaying = false;
          fx = 500;
          fy = 240;
          changeStart = true;
          ex1 = -2300;

        }

        if (initialBlood >= 190) {
          initialBlood = 190;
        }

      //   for(int i =0 ;i<5;i++){
      //     if (bulletPositionY > closestEnemy()) {
      //       bulletPositionY--;
      //     }else{
      //       bulletPositionY++;
      //     }
      //   }
      // }
      
      // if(bulletPositionX)
    }
}
  void pressSetting() {
    if (upPressed) {// 按件判別
      fy -= speed;
    }
    if (downPressed) {
      fy += speed;
    }
    if (leftPressed) {
      fx -= speed;
    }
    if (rightPressed) {
      fx += speed;
    }

  }

  void keyPressed() {
    if (key == CODED) {
      switch (keyCode) {
      case UP:
        upPressed = true;
        break;
      case DOWN:
        downPressed = true;
        break;
      case LEFT:
        leftPressed = true;
        break;
      case RIGHT:
        rightPressed = true;
        break;
      }
    }

    if (key == ' ' && countBulletFrame > 15 && num_bullet <= 5) {
      bulletPressed = true;
      bulletPositionX[ID_bullet] = (int) fx;
      bulletPositionY[ID_bullet] = (int) fy;
      bullet_appear[ID_bullet] = true;
      countBulletFrame = 0;
      ID_bullet++;
      num_bullet++;
      if (ID_bullet >= bulletPositionX.length) {
        ID_bullet = 0;
      }
    }
  }

  void keyReleased() {
    if (key == CODED) {
      switch (keyCode) {
      case UP:
        upPressed = false;
        break;
      case DOWN:
        downPressed = false;
        break;
      case LEFT:
        leftPressed = false;
        break;
      case RIGHT:
        rightPressed = false;
        break;
      }
    }
    
    //set Gauss Key Released function
    if(key == ENTER){//Press Enter for re-calibration
      if(gs != null) gs.redoCalibration();
    }
    if(key == TAB){ //Press Tab to toggle the raw data
      showRawData = (showRawData == true ? false : true); 
    }
  }

  void border() {
    if (fx >= 600) {// 橫向範圍設定
      fx = 600;
    }
    if (fx <= 0) {
      fx = 0;
    }
    if (fy >= 440) {// 直向範圍設定
      fy = 440;
    }
    if (fy <= -0) {
      fy = 0;
    }
    if (fx >= 600) {// 橫向範圍設定
      fx = 600;
    }
    if (fx <= 0) {
      fx = 0;
    }
    if (fy >= 440) {// 直向範圍設定
      fy = 440;
    }
    if (fy <= -0) {
      fy = 0;

    }
  }

  void updateTreasure() {
    changeTreasurePlace = true;
  }

  void crtlboom(float t, int f) {
    if (framecount >= 0 && framecount < 12) {
      image(flame[0], t, f);
      // println(framecount);
      framecount++;
    } else if (framecount >= 12 && framecount < 24) {
      image(flame[1], t, f);
      print("hi");
      framecount++;
    } else if (framecount >= 24 && framecount < 36) {
      image(flame[2], t, f);
      framecount++;
    } else if (framecount >= 36 && framecount < 48) {
      image(flame[3], t, f);
      framecount++;
    } else if (framecount >= 48 && framecount <= 60) {
      image(flame[4], t, f);
      framecount++;
    } else {
      framecount = 0;
    }
  }

  void updateEnemy(int i) {
    switch (i) {
    case 0:
      changeEnemyPlace0 = true;
      break;
    case 1:
      changeEnemyPlace1 = true;
      break;
    case 2:
      changeEnemyPlace2 = true;
      break;
    case 3:
      changeEnemyPlace3 = true;
      break;
    }
  }

  // crash
  boolean isHit(float ax, float ay, int aw, int ah, int bx, int by, int bw, int bh) {
    if ((ax + aw >= bx) && (ax <= bx + bw)) {
      if ((ay + ah >= by) && ay <= bh + by) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  //score 
  void scoreChange(int score) {
    textSize(32);
    text("Score:" + score, 10, 470);
    fill(255);
  }

  float closestEnemy(int x, int y){
    int tmpA = 0;
    int tmpB = 0;
    for(int i = 0;i<4;i++){
      for(int j = 0;j<10;j++){
        if (locationX[i][j] - x > locationX[tmpA][tmpB] - x ) {
          tmpA = i;
          tmpB = j;
        }
      }
    }
   

    return locationY[tmpA][tmpB];
  }
  
  //show GaussToysData
  void printPointData(GData g){ //API Demos
  int intensity = (int) g.getIntensity(); //Get the intensity. Unit: gauss
  int x = (int) g.getX(); //Get the X coordinate on the display
  int y = (int) g.getY(); //Get the Y coordinate on the display
  float angleInRad = (float) g.getAngle(); //Get the angle of roll. Unit: Rad
  int angleInDegree = (int) degrees(angleInRad); //Turn the rad into degree
  int pitch = (int) g.getPitch(); //Get the pitch angle of tilt
  if(intensity>0) println("BipolarPoint: ~ " + (int)intensity + " gauss, (x,y)= ("+x+","+y+"), Roll angle = "+ angleInDegree +", Tilt pitch = "+ pitch);
}