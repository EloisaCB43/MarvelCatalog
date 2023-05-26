"use client";

import Card from "./components/Card";
import MovieProgress from "./components/MovieProgress";
import Video from "./components/VideoCard";
import Image from "./components/ImageCard";
import NavBar from "./components/NavBar";
import CardPaginate from "./components/Paginate";
import styled from "styled-components";
import { useEffect, useState } from "react";
import fetchCharacters from "./api/fetchCharacters";
import Modal from "./components/Modal";

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url("/background_container.png");
  background-repeat: no-repeat;
  background-size: cover;
  gap: 20px;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto 1fr;
    padding: 0px 60px;
  }
`;

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (min-width: 769px) {
    grid-column: 1 / span 5;
    grid-row: 2 / span 1;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (min-width: 769px) {
    grid-column: 1 / span 5;
    grid-row: 3 / span 1;
  }
`;

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await fetchCharacters(offset);

      setCharacters(data.results);
    };

    getCharacters();
  }, [offset]);

  return (
    <PageContainer className="min-h-screen" id="page">
      <NavBar />
      <MediaContainer>
        <MovieProgress />
        <Video />
        <Image />
      </MediaContainer>

      <CardContainer>
        {characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            comics={character.comics.available}
            movies={character.series.available}
            avatar={character.thumbnail.path}
            setSelectedCharacter={setSelectedCharacter}
            data={character}
          />
        ))}
      </CardContainer>
      <CardPaginate setOffset={setOffset} offset={offset} />

      <Modal
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
    </PageContainer>
  );
}
