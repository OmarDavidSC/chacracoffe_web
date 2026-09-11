<template>
    <header class="navbar">
        <a href="#" class="navbar-logo">
            <img src="/images/Logo_Chacra.png" alt="Logo ChacraCoffee" />
        </a>

        <nav class="navbar-links">
            <a class="navbar-link" href="#" >Home</a>
            <a class="navbar-link" href="#">Coffee</a>
            <a class="navbar-link" href="#">Offer List</a>
            <a class="navbar-link" href="#">New Releases</a>
            <a class="navbar-link" href="#">Story</a>
            <a class="navbar-link" href="#">About</a>
            <a class="navbar-link" href="#">Contact</a>
        </nav>

        <div class="navbar-actions">
            <button class="navbar-samples" type="button">REQUEST SAMPLES</button>
            <button class="navbar-language" type="button">EN</button>
            <button class="navbar-language" type="button">ES</button>
        </div>

    </header>
</template>

<style scoped>
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar-logo img{
        width: 72px;
        height: auto;
    }

    .navbar-links{
        display: flex;
        gap: 28px;
    }

    .navbar-link{
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }

    .navbar-actions{
        display: flex;
        gap: 10px;
    }

    .navbar-samples{
        padding: 10px 10px;
        background-color: #022708;
        border: none;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
    }

    .navbar-language{
        color: #fff;
        padding:8px 11px;
        border: 2px solid rgba(255, 255, 255, 0.35);
        border-radius: 2px;
        cursor: pointer;
        background: transparent;
        font-size: 10px;
    }
</style>