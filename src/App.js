import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

export default function App() {
  return (
   
    <div className="App">
      <Header />
      {notes.map(noteItem => (
        <Note
        
          key={noteItem.key}
          imgsrc={noteItem.imgsrc}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
      
    </div>
  );
}