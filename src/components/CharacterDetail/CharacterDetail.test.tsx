import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  CharacterDetailContainer,
  CharacterDetailImage,
} from "./CharacterDetail";
import { afterEach } from "node:test";

describe("character detail components", () => {
  afterEach(cleanup);
  
  it("renders", () => {
    render(<CharacterDetailContainer>Element</CharacterDetailContainer>);
    expect(screen.getByTestId("character-detail-container")).toBeVisible();
  });

  it("renders", () => {
    render(<CharacterDetailImage characterThumbnail="something" />);
    expect(screen.getByTestId("character-detail-image")).toBeVisible();
  });
});
