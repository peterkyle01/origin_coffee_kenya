import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function PeopleSelect() {
  return (
    <Select >
      <SelectTrigger className="w-[280px] text-white">
        <SelectValue placeholder="People" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>People</SelectLabel>
          <SelectItem value="one">One</SelectItem>
          <SelectItem value="two">Two</SelectItem>
          <SelectItem value="three">Three</SelectItem>
          <SelectItem value="four">Four</SelectItem>
          <SelectItem value="five">Five</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
