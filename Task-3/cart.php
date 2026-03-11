<?php
session_start();

$products = [
    "1" => ["name" => "Shoes", "price" => "1000"],
    "2" => ["name" => "Jacket", "price" => "2000"],
    "3" => ["name" => "Belt", "price" => "5000"]
];

if (!isset($_SESSION["cart"]) || empty($_SESSION["cart"])) {
    echo "Your cart is empty.";
} else {
    $total = 0;
    echo "<h2>Your Cart</h2>";
    foreach ($_SESSION["cart"] as $id) {
        if (isset($products[$id])) {
            $item = $products[$id];
            echo "Name: " . $item["name"] . " - Price: " . $item["price"] . "</br>";
            $total += (int)$item["price"];
        }
    }
    echo "<br/><strong>Total: " . $total . "</strong>";
}
?>
<br/><a href="shop.php">Continue Shopping</a>
