import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import SocialAuth from "@/components/molecules/SocialAuth";
import LinkAtom from "@/components/atoms/LinkAtom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Heading level={1} className="text-black font-bold">
              Login
            </Heading>
          </div>
          
          <form className="space-y-6">
            <Input
              type="email"
              placeholder="fahmiagungmaulanaaa@gmail.com"
              label="Email"
              defaultValue="fahmiagungmaulanaaa@gmail.com"
            />
            
            <Input
              type="password"
              placeholder="minimal 8 karakter"
              label="Kata Sandi"
              defaultValue="minimal 8 karakter"
            />
            
            <div className="text-right">
              <LinkAtom 
                href="#" 
                className="text-sm text-gray-400 hover:text-[#6E62E5] transition-colors"
              >
                Forgot password?
              </LinkAtom>
            </div>
            
            <Button variant="primary" fullWidth size="lg">
              Login
            </Button>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            
            <div className="mt-6">
              <SocialAuth action="signin" />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Text variant="small" className="text-gray-500">
              Don&apos;t have an account?{" "}
              <LinkAtom href="/signup" className="text-[#6E62E5] hover:underline font-medium">
                Sign Up
              </LinkAtom>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
