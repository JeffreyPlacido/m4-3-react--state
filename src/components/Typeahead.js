import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: black;
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

const AutoFill = styled.span`
  font-weight: bold;
`;
const Genre = styled.span`
  font-size: medium;
  font-style: italic;
  span {
    color: purple;
  }
`;

const Typeahead = ({ suggestions, handleSelect, categories }) => {
  const [search, setSearch] = React.useState("");
  if (
    search.length > 1 &&
    suggestions.filter((obj) => {
      return obj.title.toLowerCase().includes(search.toLowerCase());
    }).length > 0
  ) {
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
                  <AutoFill>
                    {suggestion.title.slice(
                      0,
                      suggestion.title
                        .toLowerCase()
                        .indexOf(search.toLowerCase())
                    )}
                  </AutoFill>
                  {suggestion.title.slice(
                    suggestion.title
                      .toLowerCase()
                      .indexOf(search.toLowerCase()),
                    suggestion.title
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) + search.length
                  )}
                  <AutoFill>
                    {suggestion.title.slice(
                      suggestion.title
                        .toLowerCase()
                        .indexOf(search.toLowerCase()) + search.length,
                      suggestion.title.length
                    )}{" "}
                  </AutoFill>
                  <Genre>
                    in <span>{categories[suggestion.categoryId].name}</span>
                  </Genre>
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
