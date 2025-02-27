/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Você pode manter essa parte vazia se não precisar de alterações na configuração do webpack
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Desativa ESLint durante o build
  },
};

// Função de inicialização para conectar ao banco de dados
const connectToDatabase = async () => {
  const { connectToDatabase } = await import('./lib/mongodb.mjs');
  await connectToDatabase();
};

connectToDatabase().then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

export default nextConfig;
