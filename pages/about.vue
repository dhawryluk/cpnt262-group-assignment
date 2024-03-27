<template>
  <main class="cards">
        <section class="card contact">
            <div class="icon">
                <img src="" alt="Contact us.">
            </div>
            <h3>Contact us.
                We're accessible through calls and social media and question can be asked there with a fast response for the respect of your time.
            </h3>
            <span></span>
            <button>Learn More</button>
        </section>
        <section class="card shop">
            <div class="icon">
                <img src="" alt="Shop history.">
            </div>
            <h3>Shop history.
                The Shop history of our company has always stayed on demand. reason? Once you but and see the great delivery we provide there would be nothing more to satisfy a customer.s
            </h3>
            <span></span>
            <button>Learn More</button>
        </section>
        <section class="card about">
            <div class="icon">
                <img src="" alt="About us.">
            </div>
            <h3>About us. we're one of the top well respected game store's wining multiple awards as the best game store of the year
            
            </h3>
            <span></span>
            <button>Learn More</button>
        </section>
    </main>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    background: #00040c;
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #434343;

    font-size: 16px;
    height: 100vh
}

main.cards {
    display: flex;
    padding: 32px;
    height: 100vh
}

main.cards section.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgb(18, 0, 0);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    max-height: 468px;
    margin-left: 32px;
}

main.cards section.card:first-child {
    margin-left: 0;
}

main.cards section.card .icon {
    width: 64px;
    height: 64px;
}

main.cards section.card img {
    width: 100%;
    height: 150%

}

main.cards section.card h3 {
    font-size: 100%;
    margin: 16px 0;
}

main.cards section.card span {
    font-weight: 300;
    max-width: 240px;
    font-size: 80%;
    margin-bottom: 16px;
}

main.cards section.card button {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    border-radius: 32px;
    border: 0;
    cursor: pointer;
    font-size: 80%;
    font-weight: 500;
    color: #0e0101;
    margin-bottom: 16px 0;
}

main.cards section.card.contact button {
    background: linear-gradient(to right, #9F66FF, #DFCBFF);
}
main.cards section.card.shop button {
    background: linear-gradient(to right, #3E8AFF, #BBDEFF);
}
main.cards section.card.about button {
    background: linear-gradient(to right, #FE5F8F, #FFC7D9);
}

main.cards section.card.contact {
    box-shadow: 20px 20px 50px -30px #DBC4FF;
}
main.cards section.card.shop {
    box-shadow: 20px 20px 50px -30px #AFD6FF;
}
main.cards section.card.about {
    box-shadow: 20px 20px 50px -30px #FFC1D5;
}

@media screen and (max-width: 720px) {
    main.cards {
        flex-direction: column;
    }

    main.cards section.card {
        margin-left: 0;
        margin-bottom: 32px;
    }

    main.cards section.card:last-child {
        margin-bottom: 0;
    }

    main.cards section.card button {
        font-size: 70%;
    }

}



</style>

