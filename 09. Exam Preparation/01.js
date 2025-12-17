function solve(data) {
    let astronauts = [];
    let n = Number(data[0]);

    for (let i = 1; i <= n; i++) {
        let [name, section, skills] = data[i].split(' ');
        astronauts.push({
            name,
            section,
            skills: skills.split(',')
        });
    }

    for (let i = n + 1; i < data.length; i++) {
        let items = data[i].split(' / ');
        let command = items[0];

        if (command === 'End') break;

        let name = items[1];
        let currentAstronaut = astronauts.find(a => a.name === name);

        if (!currentAstronaut) continue;

        switch (command) {
            case 'Perform': {
                let section = items[2];
                let skill = items[3];

                if (
                    currentAstronaut.section === section &&
                    currentAstronaut.skills.includes(skill)
                ) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
            }

            case 'Transfer': {
                let newSection = items[2];
                currentAstronaut.section = newSection;
                console.log(`${name} has been transferred to: ${newSection}`);
                break;
            }

            case 'Learn Skill': {
                let newSkill = items[2];

                if (currentAstronaut.skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    currentAstronaut.skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
            }
        }
    }

    astronauts.forEach(a => {
        let sortedSkills = a.skills.slice().sort((a, b) => a.localeCompare(b));
        console.log(
            `Astronaut: ${a.name}, Section: ${a.section}, Skills: ${sortedSkills.join(', ')}`
        );
    });
}


solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
]);