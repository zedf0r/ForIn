import { orderByProps } from "../app";

test('Sorting array', () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const sortArray = [
      {key: 'name', value: "мечник"},
      {key: 'defence', value: 40},
      {key: 'attack', value: 80},
      {key: 'health', value: 10},
      {key: 'level', value: 2}
    ]

  expect(orderByProps(obj, ["name", "defence"])).toEqual(sortArray)
})