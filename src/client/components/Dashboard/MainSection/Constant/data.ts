import Group from '../../../Svg/Group';
import TableCircle from '../../../Svg/TableCircle';
import Tick from '../../../Svg/Tick';
import pic from '../../assets/Avatar.png';


export const PROJECTS_DATA = [
    {
        title: 'Hiphonic',
        percentage: 55,
        progressColor: 'bg-blue-700',
        progressCount: '55%',
        pic: pic,
        peopleCount: '2',
        tickCount: '8',
        totalTickCount: '15' 
    },
        {
        title: 'SEO Analythics',
        percentage: 30,
        progressColor: 'bg-pink-500',
        progressCount: '30%',
        pic: pic,
        peopleCount: '3',
        tickCount: '8',
        totalTickCount: '40'
    },
            {
        title: 'Dibhub App',
        percentage: 89,
        progressColor: 'bg-yellow-500',
        progressCount: '89%',
        pic: pic,
        peopleCount: '2',
        tickCount: '40',
        totalTickCount: '55'
    }
]


export const YAxis  =[
    '100% ', '70%', '50%', '20%', '0%'
] 

export const XAxis = [
    'Sum', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat' 
]

export const SUMMARY_DATA = [
    { icon: TableCircle, title: 'Project', rating: '40', bgColor: 'bg-blue-700' },
    {icon: Group, title: 'Assigned', rating: '79', bgColor: 'bg-blue-400'},
    {icon: Tick, title: 'Closed', rating: '89', bgColor: 'bg-gray-200'}
]