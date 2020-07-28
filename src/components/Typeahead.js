import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: blue;
  padding: 8px;
  border-radius: 4px;
`;
const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid grey;
  margin: 5px;
`;

const Suggestion = styled.li`
  padding: 4px;
  &:hover {
    background-color: lightsalmon;
  }
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [search, setSearch] = React.useState("");
  if (search.length > 1) {
    return (
      <>
        <Input
          type="text"
          name="searchBox"
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              return search;
            }
          }}
        />
        <Button onClick={() => setSearch("")}>Clear</Button>
        <ul>
          {suggestions
            .filter((obj) => {
              return obj.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((suggestion) => {
              return (
                <Suggestion
                  key={suggestion.id}
                  onClick={() => handleSelect(suggestion.title)}
                >
                  {suggestion.title}
                </Suggestion>
              );
            })}
        </ul>
      </>
    );
  }
  return (
    <>
      <Input
        type="text"
        name="searchBox"
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            return search;
          }
        }}
      />
      <Button onClick={() => setSearch("")}>Clear</Button>
    </>
  );
};

export default Typeahead;
