import Nav from "../components/nav"
import "../style/index.scss"
import hus from '../assets/Fotos/65597_371193986331909_1972008760_n.jpg';

function Index() {
 

  return (
    <>
    <Nav />
    <main>  <h1>Velkommen</h1> 
      <section className="index__section">
         <div>
           
      <p>Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt
stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på
det naturskønne Sydlangeland.</p>
<p>Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder
desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet
alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der
har mistet én af eller begge deres forældre, børn der er tvangsfjernet fra deres hjem og
familie, børn der bliver mobbet i skolen, børn der vokser op i meget fattige familier, børn
fra skilsmisse- og sammenbragte familier - vi kender allesammen et barn, der tilhører en af
disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>

<p>Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private
til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård. Hjælp os med at
hjælpe dem!</p>
 </div>
<div><img src={hus} alt="hus" /></div>
</section>



</main>
 

    </>
  )
}

export default Index
