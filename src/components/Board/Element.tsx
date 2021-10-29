import { useState } from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';

import styled from 'styled-components';

const Box = styled.div`
  display: inline-flex;
  padding: 30px 40px;
  background: lightblue;
  color: black;
  cursor: pointer;
  margin: 3px;
`;

interface D {
  x: number;
  y: number;
}

export default function Element({ title }: { title: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const eventLogger = (e: DraggableEvent, data: D) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      defaultPosition={{ x: position.x, y: position.y }}
      onStop={(e, data) => eventLogger(e, data)}
    >
      <Box>{title}</Box>
    </Draggable>
  );
}
