
import { useParams } from "react-router-dom";
import Header from "../component/Header";

function TrainerDetailsPage () {

    const trainers = [
        {
          id: 1,
          name: "Sasha du Bourg Palette",
          bio: "jveux tous les attraper",
        },
        {
          id: 2,
          name: "Dwayne Johnson",
          bio: "jveux tous les soulever",
        },
        {
          id: 3,
          name: "Affida Turner",
          bio: "je veux décéder",
        },
      ];

      const {trainerId} = useParams();

      const trainerFound = trainers.find((trainer) =>{
        return trainer.id == trainerId;
      })

    return(

        <>
            <Header/>
            <main>
                <h2>{trainerFound.name} </h2>
                <p>{trainerFound.bio} </p>
            </main>
        
        </>
    )
}

export default TrainerDetailsPage;