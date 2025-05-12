'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Image } from './image';

interface ProfileCardProps {
    name: string
    title: string
    avatarUrl: string
}

export function ProfileCards(props: ProfileCardProps) {
    const [following, setFollowing] = useState(false);
    const [followers, setFollowers] = useState(0);

    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <Card className='w-80 mx-auto flex'>
                <CardHeader className='flex justify-between items-center' >
                    <div>
                        <CardDescription>{props.title}</CardDescription>
                        <CardTitle>{props.name}</CardTitle>
                    </div>

                    <div>Followers: {followers}</div>
                    
                    
                </CardHeader>

                <CardContent className='flex flex-col gap-4'>
                    <Image avatarUrl={props.avatarUrl}></Image>
                    <footer className='w-full flex justify-center'>
                        <Button onClick={() => { setFollowing(!following); setFollowers(following ? followers - 1 : followers + 1)}}>{following ? 'Unfollow' : 'Follow'}</Button>
                    </footer>
                </CardContent>
            </Card>
        </div>
        
    )
}