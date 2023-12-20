type LanguageProp = {
    params: { lang: Locale }
}

type HeroJsonData = {
    jobTitle: string
    motto: string[]
    intro: string
    button: string
}

type SkillJsonData = {
    slillData: {
        skill_name: string;
        Image: string;
        width: number;
        height: number;
    }[]
    frontendSkills: {
        skill_name: string;
        Image: string;
        width: number;
        height: number;
    }[]
    backendSkills: {
        skill_name: string;
        Image: string;
        width: number;
        height: number;
    }[]
    text1: string
    text2: string
    text3: string
}

