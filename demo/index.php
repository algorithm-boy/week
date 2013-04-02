<!DOCTYPE html>
<html>
  <head>
    <?php include "base_meta.php"; ?>
    <title>WebApp测试</title>
    <?php include "base_assets.php"; ?>
  </head>
  <body>
    <!--http://cubiq.org/iscroll-4 滚动效果-->
    <!--http://zeptojs.com/	移动开发库-->
    <!--http://hi.baidu.com/alimyself/item/5844d68a8e92fc57840fab8a-->
    <!--http://app-framework-software.intel.com/-->
    <div class="page">
        <?php include "html/nav.php";?>
        
      <div id="flip" class="flip">
        <div id="sidebar" class="sidebar">        
            <?php include "html/member_list.php";?>
        </div>
        <div id="oneScreen" class="screen">
            <?php include "html/detail.php"; ?>
        </div>
        <div id="twoScreen" class="screen">
            <?php include "html/comments.php";?>
        </div>
      </div>
    </div>
  </body>
</html>
