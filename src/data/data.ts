import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import {  AiOutlineApi } from 'react-icons/ai'
import { FaGitAlt } from 'react-icons/fa'
import {SiJest} from 'react-icons/si'
import { DiVim } from 'react-icons/di'
import {IService} from '../types/types'

export const services: IService[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build scalable websites using <b>React.js</b> and <b>Gatsby.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b>  frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop REST API using <b>Node API</b> ',
   },
   {
      Icon: SiJest,
      title: 'Testing Development',
      about:
         'I can unit test with <b>Jest</b> and integration with <b>Enzyme</b> ',
   },
   {
      Icon: FaGitAlt,
      title: 'Git handling',
      about:
         'Correct handling of <b>Git</b>, especially <b>GitHub</b> ',
   },
   {
      Icon: DiVim,
      title: 'Vim handling',
      about:
         'I use it daily as a text editor, I automate things for faster work.',
   },
]




