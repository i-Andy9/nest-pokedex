import { IsInt, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDTO {
    @IsOptional()
    @Min(1)
    @IsPositive()
    limit?: number

    @IsOptional()
    @IsInt()
    offset?: number
}