import { useQuery } from '@tanstack/react-query';

import { IncomeListSchema } from '../schemas/income.schema';
import incomesService from '@/core/api/incomesService';
import { Income } from '../components/CurrentIncomes/CurrentIncomes.types';

export const useCurrentIncomes = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['currentIncomes'],
    queryFn: () =>
      incomesService
        .getCurrentIncomes('03', '2026')
        .then((r) => IncomeListSchema.parse(r.data))
        .catch((err) => console.log(err)),
  });

  const incomes = data as Income[];

  return { incomes, isLoadingCurrentIncomes: isLoading, useCurrentIncomesError: error };
};
