import { storiesOf } from "@storybook/react";
import DefaultStory from "./Basics/DefaultStory";
import OverideStory from "./Basics/OverideStory";

const storiesBasics = storiesOf("React tree view|Basics", module);

storiesBasics.add("Default", DefaultStory);
storiesBasics.add("Overide", OverideStory);
