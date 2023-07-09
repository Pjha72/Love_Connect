import { Card, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



const TABLE_HEAD = ["Name", "Age", "Gender", "Location", "Interest"];


export default function Example() {
  const { currentUser } = useContext(AuthContext)
  const TABLE_ROWS = currentUser
  console.log(currentUser);
  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, age, gender, location, interests, image }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal flex gap-2 items-center ">
                    <img src={image} alt="" className="h-10 w-10 rounded-full  " />
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {age}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {gender}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {location}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {interests}
                  </Typography>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}