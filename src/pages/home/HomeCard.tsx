import { Avatar, Button, Card, Tooltip } from 'flowbite-react';
import avatarImg from '../../assets/jhonatan-circle-cropped.png';
import GithubIcon from '../../components/icons/GithubIcon.tsx';
import Linkedin from '../../components/icons/LinkedinIcon.tsx';
import PdfFileIcon from '../../components/icons/PdfFileIcon.tsx';
import MailBoxIcon from '../../components/icons/MailBoxIcon.tsx';
import { Link } from 'react-router-dom';
import CopyIcon from '../../components/icons/CopyIcon.tsx';
import useNotifyToast from '../../states/useNotifyToast.ts';
import ExternalIcon from '../../components/icons/ExternalIcon.tsx';

const HomeCard = () => {

    const URL_GITHUB = "https://github.com/getJv";
    const URL_LINKEDIN = "https://www.linkedin.com/in/jhonatan-morais";
    const URL_RESUME = "https://drive.google.com/file/d/1JxR56wWfDCsmn6okYeNoz12NvVMp0PBE/view?usp=sharing";
    const URL_EMAIL = "jhonatanvinicius@gmail.com";
    const URL_PORTFOLIO = "https://jpmorais.com.br/portfolio";


    const { setNotify } = useNotifyToast((state) => state);

    const handleClick = () => {
        window.location.href = URL_PORTFOLIO; //
    };

    const socialIcons = [
        {
            type: 'link',
            title: 'Visit my Github',
            url: URL_GITHUB,
            icon: <GithubIcon />,
        },
        {
            type: 'link',
            title: 'Visit my Linkedin',
            url: URL_LINKEDIN,
            icon: <Linkedin />,
        },
        {
            type: 'link',
            title: 'Get my Resume',
            url: URL_RESUME,
            icon: <PdfFileIcon />,
        },
        {
            type: 'copy',
            title: 'My E-mail',
            url: URL_EMAIL,
            icon: <MailBoxIcon />,
        },
    ];

    return (
        <Card className="h-1/2 w-80 rounded-lg bg-slate-50 sm:h-96 sm:w-80 ">
            <div className="flex flex-col items-center ">
                <Avatar
                    className="-mt-12 w-48 sm:-mt-8 sm:w-44"
                    img={`${avatarImg}`}
                    rounded
                    alt="Avatar of Jhonatan Morais"
                />
            </div>
            <div className="flex flex-col items-center pb-10">
                <h5 className="mb-1 pt-5 text-xl font-medium text-gray-900 dark:text-white">
                    Jhonatan Morais
                </h5>
                <span className="text-md text-gray-500 dark:text-gray-400">Software Developer</span>
                <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    PHP | Golang | Node | React
                </span>
                <div className="mt-8 flex gap-x-4 space-x-3">
                    {socialIcons.map((item) => (
                        <Tooltip key={item.title} className="px-2" content={item.title}>
                            {item.type === 'link' ? (
                                <Link to={item.url} target={'_blank'}>
                                    {item.icon}
                                </Link>
                            ) : (
                                <span
                                    onClick={() => {
                                        navigator.clipboard.writeText(item.url);
                                        setNotify('E-mail copied to Clipboard!', <CopyIcon />);
                                    }}
                                >
                                    {item.icon}
                                </span>
                            )}
                        </Tooltip>
                    ))}
                </div>
                <div className="mt-8 flex gap-x-4 space-x-3 lg:mt-6">

                    <Button color="gray" className="px-5" onClick={handleClick}>
                             Visit portfolio<ExternalIcon />

                    </Button>
                </div>
            </div>
        </Card>
    );
};
export default HomeCard;
