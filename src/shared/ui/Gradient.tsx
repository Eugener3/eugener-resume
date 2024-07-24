import { cn } from '@/src/shared/lib/utils';

interface GradientProps {
  width: string;
  height: string;
  className?: string;
}

const Gradient: React.FC<GradientProps> = ({ width, height, className }) => {
  return (
    <div className={cn('bg-gradient', className)} style={{ width, height }} />
  );
};

export default Gradient;
