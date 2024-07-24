import { useAuthContext } from "../../hooks/useAuthContext";
import Avatar from "react-avatar";
import { getRandomHexColor } from "../../lib/utils";
import { useState, useEffect } from 'react'
import ProfileLoder from "./ProfileLoder";

import axios from 'axios';

interface UserProfile {
    image: string | null;
}

const AsideLeft = () => {
    const { state } = useAuthContext();
    const userId = state.user?.id || 'id';
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const fetchProfile = async () => {
        setLoading(true); 
        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/api/v0.1/user/${userId}`);
            console.log(response.data);
            
            setImageUrl(response.data.image);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }finally {
            setLoading(false); 
          }
    };
    useEffect(() => {
        if (userId) {
            fetchProfile();
        }
    }, [userId]);
    return (
        <div className="pt-8 lg:pt-20 block lg:fixed left-[15%] top-0">
            <div className="my-10 w-[90%] lg:w-auto mx-auto">
                <div className="bg-white dark:bg-slate-800 overflow-hidden shadow-lg p-4 rounded-xl">
                    <div className="text-center p-6 border-b dark:border-slate-700">

                        {
                            loading ? <ProfileLoder/> : <>
                            
                            
                            
                            {imageUrl? (
                            <img
                                className="h-24 w-24 rounded-full mx-auto"
                                src={imageUrl}
                                alt="Randy Robertson"
                            />
                        ) : (
                            <Avatar color={getRandomHexColor()} name={state.user?.name} round={true} />
                        )}
                        <p className="pt-2 text-lg font-semibold dark:text-white">{state.user?.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{state.user?.email}</p>
                        <div className="mt-5">
                            <a
                                href="#"
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700 dark:text-gray-300 dark:border-gray-600"
                            >
                                Manage your Account
                            </a>
                        </div></>

                        }
                        
                    </div>
                    <div className="border-b hidden lg:block dark:border-slate-700">
                        <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <div className="text-gray-800 dark:text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">Add members</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Add/manage users &amp; teams</p>
                            </div>
                        </a>
                        <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <div className="text-gray-800 dark:text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">Account settings</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Usage, billing, branding, teams</p>
                            </div>
                        </a>
                        <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <div className="text-gray-800 dark:text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">Personal settings</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Email, profile, notifications</p>
                            </div>
                        </a>
                        <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <div className="text-green-600 dark:text-green-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">
                                    Apps &amp; integrations
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Google, slack, mail</p>
                            </div>
                        </a>
                    </div>

                    <div className="hidden lg:block">
                        <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">Product updates</p>
                        </a>
                        <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">Status updates</p>
                        </a>
                        <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 dark:hover:bg-slate-700 flex">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-300 leading-none">Help center</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideLeft;