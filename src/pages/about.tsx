/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "components/button";
import Container from "components/layout/container";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaTrash, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useMyPokemon } from "utils/my-pokemon-context";
import { useSound } from "utils/sound-context";

const About = () => {
  const { isMuted, toggleMute } = useSound();
  const { clearMyPokemon } = useMyPokemon();
  const aboutContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    a {
      color: darkblue;
    }

    .logo {
      width: 192px;
      height: 192px;
      text-align: center;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      font-size: 1.2em;
      font-weight: bold;
    }
    p {
      text-align: center;
    }
  `;

  const handleClearMyPokemon = () => {
    clearMyPokemon();
    toast.success("All Pokémon released...");
  };

  return (
    <Container css={aboutContainer}>
      <Helmet>
        <title>{`About`}</title>
      </Helmet>

      <h1>Kemas Muhammad Qori Ichsan</h1>
      <p>
        A simple pokemon web app built for IT FESTIVAL 2022 Competition.
      </p>
      <a href="https://github.com/jquory">repository -&gt;</a>
      <div>
        <Button
          css={(theme) => ({
            display: "block",
            margin: "0 auto",
            fontSize: "1em",
            backgroundColor: isMuted
              ? theme.color.type.fighting
              : theme.color.type.water,
          })}
          onClick={toggleMute}
          aria-label={isMuted ? "unmute sound" : "mute sound"}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </Button>
        <Button
          css={(theme) => ({
            marginTop: "0.5em",
            fontSize: "1em",
            backgroundColor: theme.color.type.fire,
          })}
          onClick={handleClearMyPokemon}
        >
          <FaTrash /> Release all Pokémon
        </Button>
      </div>

      <div className="">
        <img width={50} src="/assets/hmj.png" alt="" />
        <img width={50} src="/assets/logo.png" alt="" />
        <img width={50} src="/assets/polsri.png" alt="" />
      </div>
    </Container>
  );
};

export default About;
