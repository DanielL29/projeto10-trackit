import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { FooterContainer, ProgressBar } from "./FooterStyle";

export default function Footer() {
    return (
        <FooterContainer>
            <Link to="/habitos" style={{ textDecoration: 'none' }}>
                <h2>Hábitos</h2>
            </Link>
            <Link to="/hoje" style={{ textDecoration: 'none' }}>
                <ProgressBar>
                    <CircularProgressbar backgroundPadding={6} strokeWidth={9} value={0} text="Hoje" background />
                </ProgressBar>
            </Link>
            <Link to="historico" style={{ textDecoration: 'none' }}>
                <h2>Histórico</h2>
            </Link>
        </FooterContainer>
    )
}