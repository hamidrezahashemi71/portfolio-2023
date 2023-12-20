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

type EncryptionJsonData = {
    title: string
    text1: string
    text2: string
    text3: string
    image: {
        src1: string
        alt1: string
        src2: string
        alt2: string
        width1: number
        height1: number
        width2: number
        height2: number
    }
    videoSrc: string
}

