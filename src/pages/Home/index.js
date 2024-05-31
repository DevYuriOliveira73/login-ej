import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import AddProduto from "./produtos/AddProduto";
import { Link} from "react-router-dom";
import produtoList from "./produtos/data";



const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    
    <C.Container>
      <C.Superior>
        
        <C.Title>Meus Produtos</C.Title>
        
        <AddProduto />
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair 
        </Button>
        <Link to="/produtos/Galeria">&nbsp;Acesse os produtos</Link>
        <p>TENTEI COLOCAR O COMPONENTE 'Galeria' mas não consegui </p>
      </C.Superior>
    </C.Container>
      
    
    
    
    
  );
};

export default Home;
