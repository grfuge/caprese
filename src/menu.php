<!DOCTYPE html>
<html lang="en">

<head>
  <?php include("inc/meta/_meta.html"); ?>
  <title>Menu | Caprese Mediterranean Cuisine</title>
</head>

<body>
  <?php include("inc/shared/_header.html"); ?>
  <main class="container menu">
    <section class="container menu--column">
      <?php include("inc/menu/_menu-appetizers.html"); ?>
      <?php include("inc/menu/_menu-soups.html"); ?>
      <?php include("inc/menu/_menu-salads.html"); ?>
      <?php include("inc/menu/_menu-wraps.html"); ?>
      <?php include("inc/menu/_menu-pizza.html"); ?>
    </section>
    <section class="container menu--column">
      <?php include("inc/menu/_menu-entrees.html"); ?>
      <?php include("inc/menu/_menu-sides.html"); ?>
      <?php include("inc/menu/_menu-breakfast.html"); ?>
      <?php include("inc/menu/_menu-beverages.html"); ?>
      <?php include("inc/menu/_menu-dessert.html"); ?>
    </section>
  </main>
  <?php include("inc/menu/_menu-warning.html"); ?>
  <?php include("inc/shared/_footer.html"); ?>
</body>

</html>