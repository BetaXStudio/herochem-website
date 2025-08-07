-- MINIMAL SQL Script - Nur Tabelle erstellen (ohne Trigger-Konflikte)
-- Kopiere diesen Code in den Supabase SQL Editor

-- 1. Erstelle user_profiles Tabelle
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Erstelle Index für bessere Performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_username ON public.user_profiles(username);
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON public.user_profiles(email);

-- 3. Aktiviere Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 4. Erstelle RLS Policies (nur falls sie nicht existieren)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_profiles' 
        AND policyname = 'Users can view their own profile'
    ) THEN
        CREATE POLICY "Users can view their own profile" 
            ON public.user_profiles 
            FOR SELECT 
            USING (auth.uid() = id);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_profiles' 
        AND policyname = 'Users can update their own profile'
    ) THEN
        CREATE POLICY "Users can update their own profile" 
            ON public.user_profiles 
            FOR UPDATE 
            USING (auth.uid() = id);
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_profiles' 
        AND policyname = 'Users can insert their own profile'
    ) THEN
        CREATE POLICY "Users can insert their own profile" 
            ON public.user_profiles 
            FOR INSERT 
            WITH CHECK (auth.uid() = id);
    END IF;
END $$;

-- 5. Gewähre notwendige Berechtigungen
GRANT ALL ON public.user_profiles TO authenticated;
GRANT ALL ON public.user_profiles TO service_role;

-- 6. Erstelle Profile für vorhandene Benutzer (falls gewünscht)
INSERT INTO public.user_profiles (id, email, username)
SELECT id, email, NULL
FROM auth.users
WHERE id NOT IN (SELECT id FROM public.user_profiles);

-- Fertig! 
-- Die Tabelle ist nun bereit für die Username-Funktionalität.
-- Neue Benutzer müssen manuell Profile erstellen (was automatisch in der App passiert).
