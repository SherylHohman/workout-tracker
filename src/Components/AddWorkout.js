import React from "react";

function AddWorkout() {

    return (
        <div>
            <h1>Add Workout</h1>
                <form>
                    <label>Date</label>
                    <input /><br /><br />
                    <label>Hours</label>
                    <input /><br /><br />
                    <label>Minutes</label>
                    <input /><br /><br />
                    <label>(Cardio, Weights, Stretch)</label>
                    <input /><br /><br />
                </form>
        </div>
    );
}

export default AddWorkout;
