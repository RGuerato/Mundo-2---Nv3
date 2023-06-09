import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: "Record",
    autor: "Temple Grandin",
  },
  {
    codEditora: 2,
    nome: "Apress",
    autor: "Mark Joseph Obcena",
  },
  {
    codEditora: 3,
    nome: "Novatec",
    autor: "Maurício Samy Silva",
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error("Editora não encontrada");
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}
