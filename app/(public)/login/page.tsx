import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <Heading level={1} className="text-center mb-8">
          Login
        </Heading>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6E62E5] focus:border-transparent"
              placeholder="fahmiagungmaulanaaa@gmail.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6E62E5] focus:border-transparent"
              placeholder="minimal 8 karakter"
            />
          </div>
          
          <div className="text-right">
            <a href="#" className="text-sm text-gray-400 hover:text-[#6E62E5]">
              Forgot password?
            </a>
          </div>
          
          <Button variant="primary" fullWidth>
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <Text variant="small" className="text-gray-500">
            or
          </Text>
          
          <div className="mt-4 space-y-3">
            <Button variant="outline" fullWidth>
              <span className="mr-2">🔍</span>
              Sign in with Google
            </Button>
            
            <Button variant="outline" fullWidth>
              <span className="mr-2">📘</span>
              Sign in with Facebook
            </Button>
          </div>
          
          <Text variant="small" className="text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-[#6E62E5] hover:underline">
              Sign Up
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}
