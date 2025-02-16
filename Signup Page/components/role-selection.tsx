"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Users, BookOpen, UserCog } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Role {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const roles: Role[] = [
  {
    id: 'student',
    title: 'Student',
    description: 'Access learning materials and track your progress',
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 'teacher',
    title: 'Teacher',
    description: 'Create and manage courses, grade assignments',
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 'admin',
    title: 'Administrator',
    description: 'Manage platform settings and user access',
    icon: <UserCog className="h-5 w-5" />,
  },
  {
    id: 'parent',
    title: 'Parent',
    description: 'Monitor student progress and communicate with teachers',
    icon: <BookOpen className="h-5 w-5" />,
  },
]

export function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleContinue = () => {
    if (selectedRole) {
      // Handle role selection
      console.log('Selected role:', selectedRole)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-[800px] p-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Login As</h1>
            <p className="text-muted-foreground mt-2">
              Select your role to access the platform
            </p>
          </div>

          <div className="grid gap-4">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={cn(
                  "flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200",
                  "hover:border-purple-500 hover:shadow-md",
                  selectedRole === role.id
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-900/10"
                    : "border-border"
                )}
              >
                <div className={cn(
                  "p-2 rounded-full",
                  selectedRole === role.id
                    ? "bg-purple-100 text-purple-500 dark:bg-purple-900/20"
                    : "bg-muted"
                )}>
                  {role.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </div>
                <div className={cn(
                  "w-5 h-5 rounded-full border-2",
                  selectedRole === role.id
                    ? "border-purple-500 bg-purple-500"
                    : "border-muted-foreground"
                )} />
              </button>
            ))}
          </div>

          <Button
            className="w-full"
            size="lg"
            disabled={!selectedRole}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </Card>
    </div>
  )
}