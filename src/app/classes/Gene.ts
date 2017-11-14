export class Gene {
  gene_id: string | null;
  gene_symbol: string | null;
  description: string | null;
  chromosome: string | null;
  start: number | null;
  end: number | null;
  constructor(gene_id, gene_symbol, description, chromosome, start, end) {
    this.gene_id = gene_id;
    this.gene_symbol = gene_symbol;
    this.description = description;
    this.chromosome = chromosome;
    this.start = start;
    this.end = end;
  }
}
