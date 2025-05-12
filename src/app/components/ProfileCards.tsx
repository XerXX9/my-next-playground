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

    return (
        <Card>
            <CardHeader>
                <CardDescription>{props.title}</CardDescription>
                <CardTitle>{props.name}</CardTitle>
                
            </CardHeader>

            <CardContent>
                <Image avatarUrl={props.avatarUrl}></Image>
                <footer>
                    <Button onClick={() => setFollowing(!following)}>{following ? 'Unfollow' : 'Follow'}</Button>
                </footer>
            </CardContent>
        </Card>
    )
}