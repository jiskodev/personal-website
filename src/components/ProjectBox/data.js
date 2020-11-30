import gitHubImage from '../../assets/github-battle.png'
import crudApplicationImage from '../../assets/crud-application.png'
import ravenousImage from '../../assets/ravenous.jpg'

export const Projects = [
    {
        id: '01',
        number: '01',
        title: 'GitHub Battle',
        description: 'Application made in React using the GitHub API',
        imagePath: gitHubImage,
        to: 'github-battle',
        items: [
            'React Context', 'React Router', 'Code Splitting with React Router'
        ],
        visitWebsite: 'https://github-battle-sergiu.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    },
    {
        id: '02',
        number: '02',
        title: 'Ravenous',
        description: 'Restaurant finder app made with React and Yelp API',
        imagePath: ravenousImage,
        to: 'ravenous',
        items: [
            'React', 'CodeCademy Project', 'APIs'
        ],
        visitWebsite: 'https://github-battle-sergiu.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    },
    {
        id: '05',
        number: '05',
        title: 'Document Visualizer',
        description: 'CRUD application that allows you to add documents, list them, see the details and edit them',
        imagePath: crudApplicationImage,
        to: 'document-visualizer',
        items: [
            'CRUD Application', 'React', 'Hooks'
        ],
        visitWebsite: 'https://github-battle-sergiu.netlify.app/',
        viewCode: 'https://github.com/jiskodev/github-battle'
    }
]