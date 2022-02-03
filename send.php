<?php
// Файлы phpmailer
require 'php-mailer/PHPMailer.php';
require 'php-mailer/SMTP.php';
require 'php-mailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];
$email = $_POST["email"];


// Формирование самого письма
$title = "Новое сообщение от Best Tour Plan";
$body =
    "<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $telephone<br><br>
<b>Сообщение:</b><br>$message<br> 
<b>Почта:</b> <br>$email";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str/*, $level i dont know*/) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username = 'georgylimb@yandex.ru'; // Логин на почте
    $mail->Password = 'Vfhbz123'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('georgylimb@yandex.ru', 'Мария Постнова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('wooglay@gmail.com'); /*Может быть несколько почтовых адресов*/


// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем оставленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }

}

catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header("Location: thank-you.html");