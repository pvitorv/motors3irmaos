import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div 
      style={{ width:"100%", height:600, backgroundColor: "#121212", marginBottom: 
      24}}
      >
        <h1>TESTE PAGINA</h1>
      </div>

      <div 
      style={{ width:"100%", height:600, backgroundColor: "blue", marginBottom: 
      24}}
      >
        <h1>TESTE PAGINA</h1>
      </div>

      <div 
      style={{ width:"100%", height:600, backgroundColor: "green", marginBottom: 
      24}}
      >
        <h1>TESTE PAGINA</h1>
      </div>
    </main>
  );
}
