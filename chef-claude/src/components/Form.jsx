import React from "react";
import ClaudeRecepi from "./ClaudeRecepi";
export default function Form() {

    const [ingredients, setIngredient] = React.useState(['a','b','c','d'])

    const [recipieShown,setRecipieShown] = React.useState(false)
    console.log(recipieShown);



    const foodUi = ingredients.map((food) => {
        return <li key={food}>{food}</li>
    })


    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredient(prevIngredient => [...prevIngredient, newIngredient]);

    }

    // Function to handle get recipie button click

    function handleGetRecipie(){
        setRecipieShown(prevShown=>true)
   
        
    }
    return (
        <main>
            <form action="" onSubmit={handleFormSubmit} className="input-form">
                <input type="text" placeholder="e.g Rice" name="ingredient" aria-label="Enter Receipie" />
                <button type="submit"> + Add Recepie </button>

            </form>
            {foodUi.length > 0 ? (
                <section className="recipie-section">
                    <h2>Ingredient on Hand</h2>
                    <ul>
                        {foodUi}
                    </ul>
                    {foodUi.length >= 4 &&
                        <div className="recipie-container">
                            <div>
                                <h3>Ready for Receipi</h3>
                                <p>Generate Receipie from list of ingredients</p>
                            </div>
                            <button onClick={handleGetRecipie} >Get A Recipie</button>

                        </div>}
                </section>
            ) : (<p className="show-p">Please add some recipies</p>)
            }

            { recipieShown === true && <ClaudeRecepi/>}

        </main>
    )
}