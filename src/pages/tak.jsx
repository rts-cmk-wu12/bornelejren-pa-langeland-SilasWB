import Nav from "../components/nav"
import FormelSponser from "../components/formelsponser"
import "../style/resets.scss"

function Tak() {
  return (
    <>
      <Nav />
      <main>
        <p>Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
        foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
        - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
        virksomhedssponsorer og donationer fra fonde.</p>

        <h5>En særlig tak til:</h5>
        <div id="takcontainer"></div>
        
        <hr />
        
       
      
      </main>
    </>
  )
}

export default Tak
