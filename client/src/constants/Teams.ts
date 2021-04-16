import mad_lions_img from '../assets/mad_lions.png'
import g2_esport from '../assets/g2_esport.png'
import fanatic from '../assets/fanatic.png'

export interface ITeam {
    name: string;
    img: string;
}

export const FanaticTeam : ITeam = {
    name: 'Fanatic',
    img: fanatic,
} 

export const MadLionsTeam : ITeam = {
    name: 'Mad Lions',
    img: mad_lions_img,
} 

export const G2_Esport_Team : ITeam = {
    name: 'G2 Esport',
    img: g2_esport,
} 