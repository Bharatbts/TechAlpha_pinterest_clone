import { motion } from "framer-motion";
import styled from "styled-components";

export const TilesContainer = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: grey; */
    display: grid;
    /* align-content: end; */
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 14em;
`;

export const TileColumn = styled.div`
    height: 30rem;
    width: 100%;
    /* background-color: blue; */
    transform: translateY(${({ margin }) => margin || "0rem"});
`;

export const AnimatedColumn = styled(motion.div)`
    position: relative;
`;

export const Tile = styled.img`
    height: 21rem;
    width: 100%;
    border-radius: 2rem;
    object-fit: cover;
`;