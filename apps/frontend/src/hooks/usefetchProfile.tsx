import { useState, useEffect } from 'react';
import axios from 'axios';

const usefetchProfile = (userId: string) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId) {
            const fetchProfile = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await axios.get(`${import.meta.env.VITE_API}/api/v0.1/user/${userId}`);
                    setImageUrl(response.data.image);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                    setError('Failed to load profile');
                } finally {
                    setLoading(false);
                }
            };

            fetchProfile();
        }
    }, [userId]);

    return { imageUrl, loading, error };
};

export default usefetchProfile;
