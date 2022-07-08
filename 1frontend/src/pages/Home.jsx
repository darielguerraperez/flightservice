import './Home.css';

export const Home = () => {
    return (
        <>  
        <html>
        <div class="title">
                <h1>DGI Airlines</h1>
        </div>
        <div class="container">  
 
  
            <div class="creatflightspage">
                <a className="CreatFlights-link"
                href="http://localhost:3000/createaflight"
                target="_blank"
                rel="noopener noreferrer">
                <h3>Create A Flight</h3>
                </a>
       
            </div>

            <div class="findflightspage">
                <a className="FindFlights-link"
                href="http://localhost:3000/editaflight"
                target="_blank"
                rel="noopener noreferrer">
                <h3>Edit A Flight</h3>
                </a>
            </div>
        </div> 
        </html>   
      </>
    );
}