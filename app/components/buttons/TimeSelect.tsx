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

export function TimeSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[280px] text-white">
        <SelectValue placeholder="Time" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time</SelectLabel>
          <SelectItem value="nine">09:00am</SelectItem>
          <SelectItem value="ten">10:00am</SelectItem>
          <SelectItem value="eleven">11:00am</SelectItem>
          <SelectItem value="twelve">12:00pm</SelectItem>
          <SelectItem value="one">1:00pm</SelectItem>
          <SelectItem value="two">2:00pm</SelectItem>
          <SelectItem value="three">3:00pm</SelectItem>
          <SelectItem value="four">4:00pm</SelectItem>
          <SelectItem value="five">5:00pm</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
