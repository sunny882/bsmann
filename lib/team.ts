import fs from "fs";
import path from "path";

const TEAM_DIR = path.join(process.cwd(), "public/team");

export function getTeamData() {
  const departments = fs.readdirSync(TEAM_DIR);

  return departments.map((dept) => {
    const deptPath = path.join(TEAM_DIR, dept);

    const people = fs.readdirSync(deptPath).map((file) => {
      const ext = path.extname(file);
      const base = path.basename(file, ext);

      // expected: john-doe_(frontend-developer)
      const match = base.match(/(.+)_\((.+)\)/);

      let name = base;
      let designation = "";

      if (match) {
        name = match[1].replace(/-/g, " ");
        designation = match[2].replace(/-/g, " ");
      }

      return {
        name,
        designation,
        image: `/team/${dept}/${file}`,
      };
    });

    return {
      department: dept,
      people,
    };
  });
}